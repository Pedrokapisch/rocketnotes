import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Form } from "./styles";
import { api } from '../../services/api';
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from '../../components/ButtonText';
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";


export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  async function handleNewNote() {
    if(!title) {
      return alert("Aviso: Título da nota é obrigatório")
    };
    
    if(newLink) {
      return alert("Aviso: Link inserido mas não adicionado, clique em + ou remova o texto para salvar")
    };

    if(newTag) {
      return alert("Aviso: Tag inserida mas não adicionada, clique em + ou remova o texto para salvar")
    };
    
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });
    
    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  };

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  };

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tags => tags !== deleted));
  };

  function handleBack() {
    navigate(-1);
  };

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText
              title={"voltar"}
              onClick={handleBack}
            />
          </header>

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          
          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}  
          />
          
          <Section title="Links úteis">
            {
              links.map((link, index) => (             
                <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem 
              $isNew 
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={()=> handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem
                $isNew
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}