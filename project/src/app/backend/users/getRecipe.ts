import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are permitted' });
  }

  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ message: 'Please enter a search item' });
  }

  try {

    const url = 'https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}&from=0&to=20';

    const response = await fetch(url);
    const data = await response.json();

    // Checks if EDAMAM returned an error message
    if (data.status === "error") {
      return res.status(500).json({ message: data.message });
    }

    const simplifiedResults = data.hits.map((hit: any) => ({
      name: hit.recipe.label,
      calories: Math.round(hit.recipe.calories),
      image: hit.recipe.image,
      ingredientLines: hit.recipe.ingredientLines,
      dishType: hit.recipe.dishType?.[0],
    }));

    res.status(200).json(simplifiedResults);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch recipes' });
  }
}
