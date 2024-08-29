export const httpClientPlugins ={
    getData: async (url,config)=>{
        const response = await fetch(url,config)
        return response
    }
}