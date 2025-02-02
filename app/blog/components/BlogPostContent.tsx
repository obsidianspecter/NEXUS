"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BlogPost } from "./BlogData"
import { motion } from "framer-motion"

interface TableData {
  headers: string[]
  rows: string[][]
}

interface BlogPostContentProps {
  post: BlogPost
}

function isTableData(content: string): { isTable: boolean; tableData?: TableData } {
  try {
    const data = JSON.parse(content)
    if (data.type === 'table' && data.headers && data.rows) {
      return { isTable: true, tableData: { headers: data.headers, rows: data.rows } }
    }
  } catch {
    // Not JSON, so not a table
  }
  return { isTable: false }
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="container py-12">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">← Back to Blog</Link>
        </Button>
        <div className="text-sm text-muted-foreground mb-2">
          {post.category} • {post.date}
        </div>
        <h1 className="text-4xl font-bold tracking-tighter mb-8">{post.title}</h1>
        <div className="prose dark:prose-invert max-w-none">
          {/* Introduction */}
          <p className="lead text-xl">{post.content.introduction}</p>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <div key={index} className="mt-12">
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
              {(() => {
                const { isTable, tableData } = isTableData(section.content)
                if (isTable && tableData) {
                  return (
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full border-collapse border border-border">
                        <thead>
                          <tr>
                            {tableData.headers.map((header, i) => (
                              <th key={i} className="border border-border bg-muted p-4 text-left">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {tableData.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j} className="border border-border p-4">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                }
                return <p className="mb-6">{section.content}</p>
              })()}

              {/* Subsections */}
              {section.subsections?.map((subsection, subIndex) => (
                <div key={subIndex} className="mt-8">
                  <h3 className="text-2xl font-semibold mb-4">{subsection.title}</h3>
                  {(() => {
                    const { isTable, tableData } = isTableData(subsection.content)
                    if (isTable && tableData) {
                      return (
                        <div className="overflow-x-auto my-6">
                          <table className="min-w-full border-collapse border border-border">
                            <thead>
                              <tr>
                                {tableData.headers.map((header, i) => (
                                  <th key={i} className="border border-border bg-muted p-4 text-left">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {tableData.rows.map((row, i) => (
                                <tr key={i}>
                                  {row.map((cell, j) => (
                                    <td key={j} className="border border-border p-4">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )
                    }
                    return <p className="mb-6">{subsection.content}</p>
                  })()}
                </div>
              ))}
            </div>
          ))}

          {/* Conclusion */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            
            {/* Overview */}
            <p className="mb-6">{post.content.conclusion.overview}</p>

            {/* Summary Table */}
            {(() => {
              const { isTable, tableData } = isTableData(post.content.conclusion.summaryTable)
              if (isTable && tableData) {
                return (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-border bg-background/50 backdrop-blur-sm">
                      <thead>
                        <tr>
                          {tableData.headers.map((header, i) => (
                            <th key={i} className="border border-border bg-muted/50 p-4 text-left">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-muted/30 transition-colors">
                            {row.map((cell, j) => (
                              <td key={j} className="border border-border p-4 whitespace-pre-line">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }
              return null
            })()}

            {/* Recommendations */}
            <h3 className="text-2xl font-semibold mb-4">{post.content.conclusion.recommendationsTitle}</h3>
            {(() => {
              const { isTable, tableData } = isTableData(post.content.conclusion.recommendationsTable)
              if (isTable && tableData) {
                return (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-border bg-background/50 backdrop-blur-sm">
                      <thead>
                        <tr>
                          {tableData.headers.map((header, i) => (
                            <th key={i} className="border border-border bg-muted/50 p-4 text-left">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-muted/30 transition-colors">
                            {row.map((cell, j) => (
                              <td key={j} className="border border-border p-4 whitespace-pre-line">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }
              return null
            })()}

            {/* Future Outlook */}
            <h3 className="text-2xl font-semibold mb-4">{post.content.conclusion.outlookTitle}</h3>
            {(() => {
              const { isTable, tableData } = isTableData(post.content.conclusion.outlookTable)
              if (isTable && tableData) {
                return (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-border bg-background/50 backdrop-blur-sm">
                      <thead>
                        <tr>
                          {tableData.headers.map((header, i) => (
                            <th key={i} className="border border-border bg-muted/50 p-4 text-left">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.rows.map((row, i) => (
                          <tr key={i} className="hover:bg-muted/30 transition-colors">
                            {row.map((cell, j) => (
                              <td key={j} className="border border-border p-4 whitespace-pre-line">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }
              return null
            })()}

            {/* Closing */}
            <p className="mt-6">{post.content.conclusion.closing}</p>
          </motion.div>
        </div>
      </div>
    </article>
  )
} 