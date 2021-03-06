import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  console.log(session)
  if (session) {
    res.send(session.user)
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    })
  }
}