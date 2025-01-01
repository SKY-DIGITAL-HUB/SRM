// Fetch the centralized metadata
async function fetchMetadata() {
  const response = await fetch('https://raw.githubusercontent.com/SKY-DIGITAL-HUB/SRM/main/links.json');
  return response.ok ? response.json() : null;
}

// Get the link for the target repository and file
async function getLink(repository, file, targetRepository) {
  const metadata = await fetchMetadata();
  if (metadata && metadata.repositories[repository] && metadata.repositories[repository][file]) {
    return metadata.repositories[repository][file][targetRepository] || null;
  }
  return null;
}

// Example usage (can be removed in production):
async function test() {
  const link = await getLink('SRM', 'index.html', 'test');
  console.log(link);
}
