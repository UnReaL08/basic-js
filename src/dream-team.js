module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  team = [];
  
  for (i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
       team.push(members[i].trim());
    }
  }

  str = team.map( word => word[0].toUpperCase());
  sortNames = str.sort();
  dreamTeam = sortNames.join().toUpperCase().replace(/,/g, "");
  return dreamTeam;   
};