class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        console.log(explorersInNode)
        return explorersInNode
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        console.log(explorersInNode.length)
        return explorersInNode.length
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        console.log(usernamesInNode)
        return usernamesInNode
    }
    static getExplorersUsernamesByMission_String(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        const user = usernamesInNode.toString();
        console.log(user)
        return user
    }
    static filterByStact(explorers,stack){
        const explorersInNode = explorers.filter((explorer) => explorer.stacks.includes(stack));
        const usernamesInNode2 = explorersInNode.map((explorer) => explorer.githubUsername);
        console.log(usernamesInNode2)
        return usernamesInNode2
    }
}
module.exports = ExplorerService