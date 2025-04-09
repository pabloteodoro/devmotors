export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/67f5d106cbb3fe972a6388c3?pretty=true&read_key=${process.env.READ_KEY}&props=slug,title,metadata,type`)

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();


    } catch(err) {
        throw new Error("Failed to fetch data");
    }
}