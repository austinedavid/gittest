const posts = [
    {pid:"1", name:"david", image:"image1", savedids:["david1"]},
    {pid:"2", name:"mesoma", image:"image2", savedids:["dav"]},
    {pid:"3", name:"bullrun", image:"image3", savedids:["kelvin"]},
    {pid:"4", name:"chekwube", image:"image4", savedids:["johnbull"]},
    {pid:"5", name:"emeka", image:"image5", savedids:["johnbull"]},
    {pid:"6", name:"chidiebere", image:"image6", savedids:["johnbull"]},
]

export async function GET(request:Request){
    try {
        return new Response(JSON.stringify(posts), {status:200, statusText:"it was a success"})
    } catch (error) {
        return new Response(JSON.stringify({message:"something is wrong"}), {status:500})
    }
}