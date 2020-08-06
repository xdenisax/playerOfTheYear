
const processedData = { 
    winsForEachPlayer : new Map(),
    matchesPlayedByEachPlayer: new Map(),
    playersPerformance: new Map(),
    gamesFrequency: new Map()
}

const personalProcessedData = {
    numberOfWins : 0,
    totalMatchesPlayed : 0,
    performance: 0, 
    favouriteGame: ""
}

const sortMap = (map) =>{
    return new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
} 

let initializeMaps = () => {
    processedData.winsForEachPlayer = new Map();
    processedData.matchesPlayedByEachPlayer= new Map();
    processedData.playersPerformance= new Map();
    processedData.gamesFrequency= new Map();
}

export const dataProcessing = ( matches ) => {
    initializeMaps();
    if(matches){
        matches.forEach( (match) => {
            processedData.winsForEachPlayer.has(match.winner) 
            ? processedData.winsForEachPlayer.set(match.winner,  processedData.winsForEachPlayer.get(match.winner)+1) 
            : processedData.winsForEachPlayer.set(match.winner, 1);
        processedData.winsForEachPlayer = sortMap(processedData.winsForEachPlayer);


        match.players.forEach( (player) => {
            processedData.matchesPlayedByEachPlayer.has(player) 
            ? processedData.matchesPlayedByEachPlayer.set(player, processedData.matchesPlayedByEachPlayer.get(player)+1) 
            : processedData.matchesPlayedByEachPlayer.set(player, 1);
        });
        processedData.matchesPlayedByEachPlayer = sortMap(processedData.matchesPlayedByEachPlayer);

        processedData.gamesFrequency.has(match.game) 
            ? processedData.gamesFrequency.set(match.game, processedData.gamesFrequency.get(match.game)+1) 
            : processedData.gamesFrequency.set(match.game,1);
        processedData.gamesFrequency = sortMap(processedData.gamesFrequency);
        }); 
    
        Array.from(processedData.winsForEachPlayer).forEach ( ([key, value]) => {
            processedData.playersPerformance.set(key, ( processedData.winsForEachPlayer.get(key) / processedData.matchesPlayedByEachPlayer.get(key)*100 ).toFixed(1) );
        })
        processedData.playersPerformance = sortMap(processedData.playersPerformance);
    }

    return processedData;
}

export const personalDataProcessing = ( matches, alias ) => {
    dataProcessing(matches);

    matches ? console.log(matches.length): console.log("")
    personalProcessedData.totalMatchesPlayed =  processedData.matchesPlayedByEachPlayer.has(alias) ?  processedData.matchesPlayedByEachPlayer.get(alias) : 0;
    personalProcessedData.performance = processedData.playersPerformance.has(alias) ?  processedData.playersPerformance.get(alias) : 0;
    personalProcessedData.numberOfWins = processedData.winsForEachPlayer.has(alias) ?  processedData.winsForEachPlayer.get(alias) : 0;
    getFavouriteGames(matches, alias)
    
    return personalProcessedData;
}

let getFavouriteGames = (matches, alias) =>{
    const gamesPlayed = new Map();
    if( matches )  
        matches.forEach( (match) => {
            if( match.players.includes(alias) ) 
                gamesPlayed.has(match.game) 
                    ? gamesPlayed.set(match.game, gamesPlayed.get(match.game)+1) 
                    : gamesPlayed.set(match.game, 1);
                });

    let mostPlayed = gamesPlayed.size?  Math.max(...gamesPlayed.values()) : "";
    personalProcessedData.favouriteGame  = [...gamesPlayed.entries()]
        .filter(({ 1: v }) => v === mostPlayed )
        .map(([k]) => k);
}

