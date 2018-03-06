const visitingMark = 0;
const visitedMark = 1;

const findOrder = (numCourses, prerequisites) => {
    let result = [];
    let marked = [];
    let edgesMap = [];

    for (let i = 0; i < numCourses; i++) {
        edgesMap[i] = [];
    }

    for (let i = 0; i < prerequisites.length; i++) {
        const from = prerequisites[i][0];
        const to = prerequisites[i][1];
        edgesMap[from].push(to);
    }

    for (let i = 0; i < numCourses; i++) {
        if (isCycle(i, edgesMap, marked, result)) {
            return [];
        }
    }

    return result;
};

const isCycle = (n, edgesMap, marked, result) => {
    if (marked[n] === visitingMark) {
        return true;
    }
    if (marked[n] === visitedMark) {
        return false;
    }
    marked[n] = visitingMark;

    for (let i = 0; i < edgesMap[n].length; i++) {
        if (isCycle(edgesMap[n][i], edgesMap, marked, result)) {
            return true;
        }
    }

    marked[n] = visitedMark;
    result.push(n);

    return false;
};