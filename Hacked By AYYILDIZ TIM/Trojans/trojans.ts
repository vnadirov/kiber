String accountBalanceQuery = 
  "SELECT accountNumber, balance FROM accounts WHERE account_owner_id = " 
  + request.getParameter("user_id");
try {
    Statement statement = connection.createStatement();
    ResultSet rs = statement.executeQuery(accountBalanceQuery);
    while (rs.next()) {
        page.addTableRow(rs.getInt("accountNumber"), rs.getFloat("balance"));
    }
} catch (SQLException e) { ... }
SELECT accountNumber, balance FROM accounts WHERE account_owner_id = 984
0 OR 1=1
SELECT accountNumber, balance FROM accounts WHERE account_owner_id = 0 OR 1=1
String accountBalanceQuery = 
  "SELECT accountNumber, balance FROM accounts WHERE account_owner_id = ?";
try {
    PreparedStatement statement = connection.prepareStatement(accountBalanceQuery);
    statement.setInt(1, request.getParameter("user_id")); 
    ResultSet rs = statement.executeQuery();
    while (rs.next()) {
        page.addTableRow(rs.getInt("accountNumber"), rs.getFloat("balance"));
    }
} catch (SQLException e) { ... }
String userLoginQuery =
  "SELECT user_id, username, password_hash FROM users WHERE username = '"
  + request.getParameter("user") + "'";
int user_id = -1;
HashMap userGroups = new HashMap();
try {
    Satement statement = connection.createStatement();
    ResultSet rs = statement.executeQuery(userLoginQuery);
    rs.first();
    user_id = rs.getInt("user_id");
    if (!
     hashOf(request.getParameter("password")).equals(rs.getString("password_hash"))
    ) {
        throw BadLoginException();
    }
String userGroupQuery = "SELECT group FROM group_membership WHERE user_id = " + user_id;
rs = statement.executeQuery(userGroupQuery);
    while (rs.next()) {
        userGroup.put(rs.getString("group"), true);
    }
} 
catch (SQLException e) { ... }
catch (BadLoginException e) { ... }
SELECT user_id, username, password_hash FROM users WHERE username = 'john'
john';
INSERT INTO group_membership (user_id, group) 
VALUES (SELECT user_id FROM users WHERE username='john', 'Administrator'); --
SELECT user_id, username, password_hash FROM users WHERE username = 'john';
INSERT INTO group_membership (user_id, group) 
VALUES (SELECT user_id FROM users WHERE username='john', 'Administrator'); --'
String userLoginQuery =
  "SELECT user_id, username, password_hash FROM users WHERE username = ?";
try {
    PreparedSatement statement = connection.prepareStatement(userLoginQuery);
    statement.setString(1, request.getParameter("user"));
    ResultSet rs = statement.executeQuery();
 