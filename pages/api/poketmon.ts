import { NextApiRequest, NextApiResponse } from 'next'

async function GetPoketmon(req: NextApiRequest, res: NextApiResponse) {
	const data = await fetch(
    "https://2hae-test.s3.ap-northeast-2.amazonaws.com/pokemon.json"
	).then(data => data.json());
	const body = JSON.parse(req.body)
	const poketmon = data[Number(body.id)]
	return res.status(200).json(poketmon)
}

export default GetPoketmon