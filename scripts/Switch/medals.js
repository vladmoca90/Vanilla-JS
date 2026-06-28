const getAthletePosition = (position) => {
    if (!position || position.trim().length === 0) {
        throw new Error("Position is required.");
    }

    switch (position) {
        case "first place":
            return "Gold medal";
        case "second place":
            return "Silver medal";
        case "third place":
            return "Bronze medal";
        default:
            return "No medal awarded";
    }
};

console.log(getAthletePosition("first place")); // Gold medal