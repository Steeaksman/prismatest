import { PrismaClient } from "@prisma/client";
import { defineEventHandler, readBody } from "h3";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  console.log("Received a request to create a table report.");

  try {
    // Read and validate the request body
    const body: {
      title: string;
      casinoName: string;
      message: string;
      casinoLocation: string;
    } = await readBody(event);

    const requiredFields = ["title", "casinoName", "message", "casinoLocation"];

    for (const field of requiredFields) {
      if (!body[field as keyof typeof body]) {
        console.warn(`Validation failed: The field "${field}" is required.`);
        return {
          statusCode: 400,
          body: { error: `The field "${field}" is required.` },
        };
      }
    }

    // Insert the data into the 'tableReports' table
    const newReport = await prisma.tableReports.create({
      data: {
        title: body.title,
        casinoName: body.casinoName,
        casinoLocation: body.casinoLocation,
        message: body.message,
      },
    });

    console.log("Successfully created a new table report:", newReport);

    return {
      statusCode: 201,
      body: newReport,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    console.error("Error occurred while creating the table report:", errorMessage);

    return {
      statusCode: 500,
      body: {
        error: "An error occurred while creating the table report.",
        details: errorMessage,
      },
    };
  } finally {
    await prisma.$disconnect();
  }
});