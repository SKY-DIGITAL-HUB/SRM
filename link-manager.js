async function fetchMetadata() {
  const response = await fetch('https://raw.githubusercontent.com/SKY-DIGITAL-HUB/SRM/main/links.json');
  return response.ok ? response.json() : null;
}

async function getLinksForFile(MBA, fIN.html) {
  const metadata = await fetchMetadata();
  if (metadata && metadata.repositories[repository] && metadata.repositories[test][t.html]) {
    return metadata.repositories[test][t.html];
  }
  return {};
}
