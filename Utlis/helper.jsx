
export const replaceObjectId=(event)=>{
    const {_id}=event
    return {
        ...event,
        id:_id.toString()
    }
}