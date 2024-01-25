import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courseLists {
        free
        name
        sourceCode
        id
        banner {
          url
        }
        totalChapters
        tag
        createdBy {
          name
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
