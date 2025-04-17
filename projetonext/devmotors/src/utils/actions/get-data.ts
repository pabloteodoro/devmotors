export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/67f5d106cbb3fe972a6388c3?pretty=true&read_key=${process.env.READ_KEY}&props=slug,title,metadata,type`, {next: { revalidate: 120}})

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();


    } catch(err) {
        throw new Error("Failed to fetch data");
    }
}

export async function getSubMenu() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`)

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        return res.json();

    } catch(err) {
        throw new Error("Failed to fetch data");
    }
}





