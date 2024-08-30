import React from "react";
import { Card, CardHeader, CardImg, CardSubtitle, Row, Col } from 'react-bootstrap';
import articles from '../data/articles';


function Articles({ articles }) {
  return (
      <Row>
          {articles.map((article, index) => (
              <Col key={article.id} md={4} className="mb-2"> {/* md={4} creates a grid with 3 columns on medium and larger screens */}
                  <Card className='m-2'>
                      <CardHeader className=''>
                          {article.title}
                      </CardHeader>
                      <CardSubtitle className="text-muted m-2">
                          {article.date}
                      </CardSubtitle>
                      <CardImg
                          variant="top"
                          src={article.thumbnail}
                          alt={article.title}
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                      />
                      <Card.Body>
                          <Card.Text>
                              {article.content}
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
  );
}

export default Articles;
