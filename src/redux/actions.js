
export const switchDarkMode = (data) => {
    return {
        type: "darkmode/switchDarkMode",
        payload: data,
    }
}

export const addPost = (data) => {
    return {
        type: "postList/addPost",
        payload: data,
    }
}

export const incSeed = (data) => {
    return {
        type: "postList/incSeed",
        payload: data,
    }
}

export const decSeed = (data) => {
    return {
        type: "postList/decSeed",
        payload: data,
    }
}

export const incFlag = (data) => {
    return {
        type: "postList/incFlag",
        payload: data,
    }
}

export const decFlag = (data) => {
    return {
        type: "postList/decFlag",
        payload: data,
    }
}

export const handleSeed = (data) => {
    return {
        type: "userList/handleSeed",
        payload: data,
    }
}

export const handleFlag = (data) => {
    return {
        type: "userList/handleFlag",
        payload: data,
    }
}

export const handleMarkPost = (data) => {
    return {
        type: "userList/handleMarkPost",
        payload: data,
    }
}

export const handleMoblieMenu = (data) => {
    return {
        type: "moblieMenu/handleMoblieMenu",
        payload: data,
    }
}