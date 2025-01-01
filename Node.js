const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const GITHUB_TOKEN = 'your_github_personal_access_token'; // Replace with your GitHub token

app.get('/fetch-file', async (req, res) => {
  const { repository, filepath } = req.query;

  if (!repository || !filepath) {
    return res.status(400).send('Missing repository or file path');
  }

  try {
    // GitHub API to fetch file content
    const url = `https://api.github.com/repos/SKY-DIGITAL-HUB/${repository}/contents/${filepath}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3.raw',
      },
    });

    res.send(response.data); // Serve the file content dynamically
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching file from GitHub');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
