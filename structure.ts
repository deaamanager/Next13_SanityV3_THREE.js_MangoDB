import {DefaultDocumentNodeResolver} from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

export const getDefaultDocumentNode:DefaultDocumentNodeResolver = (
    s,
    { schemaType }
    ) => {
    if (schemaType === 'post') {
        return s.document().views([
            s.view.form(),
            s.view
                .component(Iframe)
                .options({ 
                    url: `${
                        process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
                    }/api/preview`, 
                    defaultSize: `desktop`,
                    reload: {
                        button: true,
                        
                    },
                    attributes: {},
                })
                .title("Preview"),
        ]);
    }
}