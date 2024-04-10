import cohere
import datetime
import csv
import json
import pandas as pd

API_KEY = "9ND41LgW8Z9cjB0jQhtl3Ki1aXyy8FV5LXRP9IFm"
co = cohere.Client(API_KEY)


def get_embeddings(texts,model):
  output = co.embed(
                model=model,
                texts=texts)
  return output.embeddings

model_id = "f51c771f-d1ed-4d84-9df5-2a2a95003def-ft"
df = pd.read_csv('trainingData.csv')
# Embed the documents using the finetuned model
df['query_embeds'] = get_embeddings(df['I am reserving for date at time with a car.'].tolist(), model=model_id)
print(df)
