import { NextApiRequest, NextApiResponse } from 'next'

async function poketmonsByType(req: NextApiRequest, res: NextApiResponse) {
	const data = await fetch(
    "https://2hae-test.s3.ap-northeast-2.amazonaws.com/pokemon.json"
	).then(data => data.json());
	const body = JSON.parse(req.body)
	const poketmons = data.filter(item => item.type.includes(body.key))
	return res.status(200).json(poketmons)
}

export default poketmonsByType