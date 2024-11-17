import yachtsDb from "@/components/api/database.json"

export default async function getYachtDetails(id){
    console.log("Id :",id)
    try {
    const datas = Object.entries(yachtsDb.yachts.yachts).map(([key,val],i)=>{ key:key; val:val})
    const yachtFounded = datas.find(data => data.id === id)
    console.log("Founded :",yachtFounded.name)
    return yachtFounded
    } catch (error) {
    console.error("Error fetching yachts:", error)
    return false
    }
};

