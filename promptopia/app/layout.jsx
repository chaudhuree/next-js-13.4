import '@styles/globals.css'

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <body className="main">
        <div class="gradient"/>
        <main className="app">
            {children}
        </main>
        </body>
        </html>
    );
};

export default RootLayout;