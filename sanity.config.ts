import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import { myTHEME } from './theme';
import LogoSanity from './components/LogoSanity';
import NavbarSanity from './components/NavbarSanity';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!; 
const dataset =process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Deaa_aldin_alawad_studio',
  title: 'Deaa ALdin Alawad CMS',
  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode, 
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio:{
    components:{
      logo: NavbarSanity,
      navbar: LogoSanity,
      
    }
  },
  theme: myTHEME,
})
