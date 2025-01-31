//import { serverSupabaseUser } from '#supabase/server';

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();


export default defineEventHandler(async (event) => {
  //Do I need to import the supabase client here?
  //const casino = await serverSupabaseUser(event);

  //Query the database and store the result in a variable called data.
  const data = await prisma.casinos.findMany({
    orderBy:{name: 'asc'},
  });
   
    

  // });

   console.log(data); // Log the data before returning

  return data

 
});
