/**
 * This file provides functions to load markdown content
 * directly from the public/documentation directory.
 */

// Import markdown files using our virtual module imports
import productDescriptionMd from 'virtual:md/patient-lab-product-description.md';
import architectureMd from 'virtual:md/achitecture.md';
import nonTechnicalDiagramsMd from 'virtual:md/non-technical-diagrams.md';
import compliancePlanMd from 'virtual:md/compliance-plan.md';

// Define the structure for markdown files
export interface MarkdownFile {
  id: string;
  title: string;
  description: string;
  filename: string;
  content: string;
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

// Function to load markdown content directly from memory
export async function loadMarkdownContent(filename: string): Promise<string> {
  try {
    // Find the markdown file by filename
    const markdownFile = markdownFiles.find(file => file.filename === filename);
    
    if (!markdownFile) {
      throw new Error(`Markdown file not found: ${filename}`);
    }
    
    // Return the content directly
    return markdownFile.content;
  } catch (error) {
    console.error('Error loading markdown:', error);
    return `# Error Loading Document\n\nFailed to load the document: ${filename}. Please try again later.\n\nDetails: ${error instanceof Error ? error.message : String(error)}`;
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