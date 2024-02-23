## Getting Started

First, run the server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

Description of the project structure so that users can quickly navigate.
The subfolders contain elements whose use is intuitive.
Instead of the standard internationality, I decided to change the language via Context, I thought it was a pretty good idea. I also used the BoxIcons library instead of the suggested icons in the layout, which did a wonderful job.

```plaintext
.
.
├── src/                  # Source code of the project
│   ├── app/              # Main application code
│     ├── dashboard/      # Folder containing the layout for the dashboard
│   ├── discounts/        # Folder containing data related to discounts
│   ├── components/       # Components for the project
│     ├── dashboard/      # Components for the dashboard
│     ├── public/         # Components for the client-side
│     ├── public/ 
│   ├── styles/           # Utility styles
│   └── translations/     # Website translations
└── 
