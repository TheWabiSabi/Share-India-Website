const fs = require('fs');
const path = require('path');

const replacements = {
  'employee-benefits-insurance':
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
  'group-travel-insurance-plans':
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80',
  'liability-insurance':
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
  'marine-transit-insurance':
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80',
  'media-and-entertainment-insurance':
    'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80',
  'motor-fleet-insurance':
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80',
  'office-package-insurance':
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  'property-and-engineering-insurance':
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
  'shopkeepers-package-and-jewellers-block':
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
  'trade-credit-insurance':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
};

for (const [folder, url] of Object.entries(replacements)) {
  const p = path.join(
    'c:/Code/Share-India-Website',
    'app',
    'corporate-insurance',
    folder,
    'data.tsx',
  );
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(
      /img:\s*`\$\{IMAGE_BASE_URL\}\/blog\/highrise\.jpg`/g,
      `img: '${url}'`,
    );
    fs.writeFileSync(p, content);
    console.log('Fixed', p);
  }
}

const pharma = path.join(
  'c:/Code/Share-India-Website',
  'app',
  'industries',
  'life-sciences-and-pharma-industry',
  'data.tsx',
);
if (fs.existsSync(pharma)) {
  let content = fs.readFileSync(pharma, 'utf8');
  content = content.replace(
    /img:\s*`\$\{IMAGE_BASE_URL\}\/blog\/construction\.jpg`/g,
    `img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80'`,
  );
  fs.writeFileSync(pharma, content);
  console.log('Fixed', pharma);
}
