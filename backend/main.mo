import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import MixinStorage "blob-storage/Mixin";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";

// Explicit migration using with-clause

actor {
  include MixinStorage();

  type Entry = {
    id : Nat;
    title : Text;
    collection : Text;
    imagePath : Text;
    description : Text;
    imageAlt : Text;
    price : Nat;
  };

  type Pricing = {
    id : Nat;
    title : Text;
    price : Text;
    description : Text;
  };

  type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  type NavigationEntry = {
    id : Nat;
    title : Text;
    path : Text;
  };

  let homeNavigationEntries = Map.empty<Nat, NavigationEntry>();
  let crownNavigationEntries = Map.empty<Nat, NavigationEntry>();
  let aboutNavigationEntries = Map.empty<Nat, NavigationEntry>();
  let contactNavigationEntries = Map.empty<Nat, NavigationEntry>();

  let collections = Map.fromIter<Nat, { id : Nat; title : Text; path : Text }>(
    [
      (0, { id = 0; title = "Blütenpracht"; path = "/images/blossom-collection.jpeg" }),
      (1, { id = 1; title = "Peak Time"; path = "/images/peak-time-collection.jpeg" }),
      (2, { id = 2; title = "Vielfalt"; path = "/images/variety-collection.jpeg" }),
    ].values()
  );

  let entries = Map.empty<Nat, Entry>();

  var nextEntryId = 0;

  var beeResultsStack : [Text] = [];
  var lastBeeResult : ?Text = null;
  var lastTrayResult : ?Text = null;
  var lastHiveResult : ?Text = null;

  let pricingEntries = Map.empty<Nat, Pricing>();

  let accessControlState = AccessControl.initState();

  public shared ({ caller }) func initializeAccessControl() : async () {
    AccessControl.initialize(accessControlState, caller);
  };

  public query ({ caller }) func getCallerUserRole() : async AccessControl.UserRole {
    AccessControl.getUserRole(accessControlState, caller);
  };

  public shared ({ caller }) func assignCallerUserRole(user : Principal, role : AccessControl.UserRole) : async () {
    AccessControl.assignRole(accessControlState, caller, user, role);
  };

  public query ({ caller }) func isCallerAdmin() : async Bool {
    AccessControl.isAdmin(accessControlState, caller);
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins or the specific user can access this profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public query func getNavigation(page : Text) : async [NavigationEntry] {
    switch (page) {
      case ("home") { homeNavigationEntries.values().toArray() };
      case ("crowns") { crownNavigationEntries.values().toArray() };
      case ("about") { aboutNavigationEntries.values().toArray() };
      case ("contact") { contactNavigationEntries.values().toArray() };
      case (_) { [] };
    };
  };

  public query func getCollections() : async [(Nat, { id : Nat; title : Text; path : Text })] {
    collections.toArray();
  };

  public query func getEntriesByCollection(collectionId : Nat) : async [Entry] {
    let collectionName = switch (collectionId) {
      case (0) { "Blütenpracht" };
      case (1) { "Peak Time" };
      case (2) { "Vielfalt" };
      case (_) { "" };
    };

    if (collectionName == "") {
      [];
    } else {
      let filteredEntries = entries.filter(
        func(_id, entry) {
          Text.equal(entry.collection, collectionName);
        }
      );
      filteredEntries.values().toArray();
    };
  };

  public query func getAllPricingEntries() : async [Pricing] {
    let updatedEntry : Pricing = {
      id = 0;
      title = "Kennenlerngespräch";
      price = "Kostenlos";
      description = "Das Erstgespräch ist kostenfrei. Es findet via Zoom oder WhatsApp statt und dauert ca. 30 Minuten.";
    };
    [updatedEntry];
  };

  public query func getBeeResults() : async {
    resultsStack : [Text];
    lastBeeResult : ?Text;
    lastTrayResult : ?Text;
    lastHiveResult : ?Text;
  } {
    {
      resultsStack = beeResultsStack;
      lastBeeResult;
      lastTrayResult;
      lastHiveResult;
    };
  };

  public query func getCsrInfo() : async {
    explanation : Text;
    status : Text;
  } {
    {
      explanation = "CSR Generation now handled in the browser";
      status = "success";
    };
  };
};
