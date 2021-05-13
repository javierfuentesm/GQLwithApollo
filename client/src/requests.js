const endpointURL = "http://localhost:9000/graphql";

export async function loadJobs() {
  const response = await fetch(endpointURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `{
          jobs{
            id
            title
            company{
              id
              name
            }
          }
        }`,
    }),
  });

  const {
    data: { jobs },
  } = await response.json();

  return jobs;
}

export async function loadJob(id) {
  const response = await fetch(endpointURL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `query JobQuery($id: ID!){
          job(id : $id){
            id
            title
            description
            company{
              id
              name
            }
          }
        }`,
      variables: { id },
    }),
  });

  const {
    data: { job },
  } = await response.json();

  return job;
}
