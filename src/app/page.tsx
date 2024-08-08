import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder"; // Adjust the path if needed

// Initialize Builder.io with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Home() {
  const model = "page";
  const content = await builder
    .get(model, {
      userAttributes: {
        urlPath: "/",
      },
      prerender: false,
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model={model} />
    </>
  );
}
