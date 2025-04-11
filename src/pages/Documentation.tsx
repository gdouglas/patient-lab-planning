import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { markdownFiles, loadMarkdownContent, getMarkdownFileById } from '../lib/markdownLoader'

const Documentation = () => {
  const { docId } = useParams<{ docId: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const currentDoc = docId 
    ? getMarkdownFileById(docId) 
    : markdownFiles[0];
  
  useEffect(() => {
    // If no docId is provided, navigate to the first doc
    if (!docId) {
      navigate(`/documentation/${markdownFiles[0].id}`);
      return;
    }

    const fetchDocContent = async () => {
      try {
        setLoading(true);
        
        // Make sure we have a valid document
        const doc = getMarkdownFileById(docId);
        if (!doc) {
          setError(`Documentation "${docId}" not found`);
          setLoading(false);
          return;
        }

        // Load content using our helper function
        const markdownContent = await loadMarkdownContent(doc.filename);
        setContent(markdownContent);
        setError(null);
      } catch (err) {
        console.error('Error fetching document:', err);
        setError(`Error loading document: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDocContent();
  }, [docId, navigate]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start gap-4"
      >
        <h1 className="text-3xl font-bold">Documentation</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Documentation Navigation Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[280px] bg-card border rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold mb-4">Documentation</h3>
          <nav className="space-y-2">
            {markdownFiles.map(doc => (
              <a
                key={doc.id}
                href={`#/documentation/${doc.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/documentation/${doc.id}`);
                }}
                className={`block p-2 rounded-md transition-colors ${
                  currentDoc?.id === doc.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="font-medium">{doc.title}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {doc.description}
                  </div>
                </motion.div>
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Documentation Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full"
        >
          <div className="bg-card border rounded-lg p-6 min-h-[600px] prose prose-neutral dark:prose-invert max-w-none">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">Loading documentation...</p>
              </div>
            ) : error ? (
              <div className="text-destructive">
                <h2>Error</h2>
                <p>{error}</p>
              </div>
            ) : (
              <ReactMarkdown>{content}</ReactMarkdown>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Documentation 