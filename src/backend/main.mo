import AccessControl "authorization/access-control";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

// No migration needed, no state type changes
actor {
  // Authentication setup
  let accessControlState = AccessControl.initState();

  // User profile type
  type UserProfile = {
    name : Text;
    email : Text;
  };

  // User profiles storage
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Authentication functions
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
    if (not (AccessControl.isAdmin(accessControlState, caller) or caller == user)) {
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

  // Page content type
  type PageContent = {
    title : Text;
    content : Text;
  };

  // Page content storage
  let pageContents = Map.empty<Text, PageContent>();

  public query func getPageContent(page : Text) : async ?PageContent {
    pageContents.get(page);
  };

  public query ({ caller }) func getAllPageContents() : async [(Text, PageContent)] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access all page contents");
    };
    pageContents.toArray();
  };

  // Pricing type and storage
  type Pricing = {
    id : Nat;
    title : Text;
    price : Text;
    description : Text;
  };

  let pricingEntries = Map.empty<Nat, Pricing>();

  var nextPricingId = 0;

  public query func getAllPricingEntries() : async [Pricing] {
    pricingEntries.values().toArray();
  };

  // CSR information type (dummy for compatibility verification)
  type CsrInfo = {
    explanation : Text;
    status : Text;
  };

  public query func getCsrInfo() : async CsrInfo {
    {
      explanation = "CSR Generation now handled in the browser";
      status = "success";
    };
  };
};

