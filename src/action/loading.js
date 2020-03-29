export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";

export function showLoading(id){
    return {
        id,
        type: SHOW_LOADING
    }
}

export function hideLoading(id){
    return {
        id,
        type: HIDE_LOADING
    }
}