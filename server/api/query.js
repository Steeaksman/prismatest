import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    const query = getQuery(event)
    const queryItem = query.input
    const items = await prisma.casinos.findMany({
        where: {
            OR: [
                {
                    city: {
                        contains: queryItem,
                        mode: 'insensitive'
                    }
                },
                {
                    cstate: {
                        contains: queryItem,
                        mode: 'insensitive'
                    }
                },
                {
                     name: {
                        contains: queryItem,
                        mode: 'insensitive'
                    }
                }
            ]
        }
    })

    return items
})