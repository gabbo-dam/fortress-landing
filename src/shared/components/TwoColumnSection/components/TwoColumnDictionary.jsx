import React from 'react';

import Title from './Title';
import Description from './Description';
import Html from './Html';
import Note from './Note';
import List from './List';
import Table from './Table';
import Anchor from './Anchor';
import Button from './Button';
import Image from './Image';

const TwoColumnDictionary = ({
  title, description, html, note, list, table, link, button, image,
}) => ({
  title: { component: <Title title={title} />, isContent: true },
  description: {
    component: <Description description={description} />,
    isContent: true,
  },
  html: {
    component: <Html html={html} />,
    isContent: true,
  },
  note: {
    component: note && (
      <Note title={note.title} description={note.description} />
    ),
    isContent: true,
  },
  list: {
    component: <List list={list} />,
    isContent: true,
  },
  table: {
    component: table && table.data && (
      <Table
        data={table.data}
        viewType={table.viewType}
        hasHeader={table.hasHeader}
      />
    ),
    isContent: true,
  },
  link: {
    component: link && link.url && (
      <Anchor
        title={link.title}
        url={link.url}
        onClick={link.onClick}
      />
    ),
    isContent: true,
  },
  button: {
    component: button && button.title && (
      <Button
        title={button.title}
        onClick={button.onClick}
      />
    ),
    isContent: true,
  },
  image: {
    component: image && image.src && (
      <Image
        src={image.src}
        radius={image.radius}
        fullScreen={image.fullScreen}
      />
    ),
    isContent: false,
  },
});

export default TwoColumnDictionary;
