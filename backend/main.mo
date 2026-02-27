import AccessControl "authorization/access-control";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import MixinStorage "blob-storage/Mixin";

// Include blob storage mixin
actor {
  include MixinStorage();

  type UserProfile = {
    name : Text;
    email : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  type PageContent = {
    title : Text;
    content : Text;
  };

  let pageContents = Map.empty<Text, PageContent>();

  type Pricing = {
    id : Nat;
    title : Text;
    price : Text;
    description : Text;
  };

  let pricingEntries = Map.empty<Nat, Pricing>();

  var nextPricingId = 0;

  type CsrInfo = {
    explanation : Text;
    status : Text;
  };

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
      Runtime.trap("Unauthorized: Only users can access profiles");
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

  public query func getPageContent(page : Text) : async ?PageContent {
    pageContents.get(page);
  };

  public query ({ caller }) func getAllPageContents() : async [(Text, PageContent)] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access all page contents");
    };
    pageContents.toArray();
  };

  public query func getAllPricingEntries() : async [Pricing] {
    pricingEntries.values().toArray();
  };

  public query func getCsrInfo() : async CsrInfo {
    {
      explanation = "CSR Generation now handled in the browser";
      status = "success";
    };
  };
};
