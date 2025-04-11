/**
 * This file provides functions to load markdown content
 * for both development and production environments.
 */

// Import static markdown files as fallbacks
import productDescriptionMd from '../assets/markdown/patient-lab-product-description.md?raw';
import architectureMd from '../assets/markdown/achitecture.md?raw';
import nonTechnicalDiagramsMd from '../assets/markdown/non-technical-diagrams.md?raw';
import compliancePlanMd from '../assets/markdown/compliance-plan.md?raw';

// Define the structure for markdown files
export interface MarkdownFile {
  id: string;
  title: string;
  description: string;
  filename: string;
  content?: string; // Static content as fallback
}

// List of markdown documents
export const markdownFiles: MarkdownFile[] = [
  {
    id: 'product-description',
    title: 'Product Description',
    description: 'Overview of the patient lab product',
    filename: 'patient-lab-product-description.md',
    content: productDescriptionMd
  },
  {
    id: 'architecture',
    title: 'Architecture',
    description: 'Technical architecture details',
    filename: 'achitecture.md',
    content: architectureMd
  },
  {
    id: 'non-technical-diagrams',
    title: 'Non-Technical Diagrams',
    description: 'Visual representations for non-technical stakeholders',
    filename: 'non-technical-diagrams.md',
    content: nonTechnicalDiagramsMd
  },
  {
    id: 'compliance-plan',
    title: 'Compliance Plan',
    description: 'Security and compliance details',
    filename: 'compliance-plan.md',
    content: compliancePlanMd
  }
];

// Function to load markdown content
export async function loadMarkdownContent(filename: string): Promise<string> {
  try {
    // Find the markdown file by filename
    const markdownFile = markdownFiles.find(file => file.filename === filename);
    
    if (!markdownFile) {
      throw new Error(`Markdown file not found: ${filename}`);
    }
    
    // Try to fetch from the server first
    try {
      // Determine the base path based on environment
      const basePath = import.meta.env.DEV ? '' : '/patient-lab-planning';
      const url = `${basePath}/documentation/${filename}`;
      
      console.log('Fetching markdown from server:', url);
      
      const response = await fetch(url);
      
      if (response.ok) {
        return await response.text();
      }
      
      console.log('Server fetch failed, using static content');
    } catch (fetchError) {
      console.warn('Network fetch failed:', fetchError);
    }
    
    // If server fetch fails, use the static content
    if (markdownFile.content) {
      console.log('Using static content for:', filename);
      return markdownFile.content;
    }
    
    throw new Error('Failed to load markdown content');
  } catch (error) {
    console.error('Error loading markdown:', error);
    return `# Error Loading Document\n\nFailed to load the document: ${filename}. Please try again later.`;
  }
}

// Get a markdown file by ID
export function getMarkdownFileById(id: string): MarkdownFile | undefined {
  return markdownFiles.find(file => file.id === id);
}

// Get all markdown files
export function getAllMarkdownFiles(): MarkdownFile[] {
  return markdownFiles;
} 