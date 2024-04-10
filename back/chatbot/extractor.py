import cohere
import datetime

API_KEY = "9ND41LgW8Z9cjB0jQhtl3Ki1aXyy8FV5LXRP9IFm"
MODEL_KEY = "f51c771f-d1ed-4d84-9df5-2a2a95003def-ft"
co = cohere.Client(API_KEY)


class Extractor():
    def __init__(self, cohere_key, model):
        self.model = model
        self.co = cohere_key
    
    def extract(self, history):
        extraction = self.co.generate(
            model = self.model,
            max_tokens=20,
            prompt= history,
            temperature=0
        )
        return extraction.generations[0].text
    
    def evaluate(self, chat_history):
        while len(chat_history) <= 250:
            chat_history = " " + chat_history
        information = self.co.summarize(
            text=chat_history,
            length='short',
            extractiveness='auto',
            temperature=0,
            additional_command="""Exact summary format: A car type car has been reserved for Month Day at Hour:Minute."""
        )
        return information.summary

def chatbot(co=co):
    preamble_override = """Briefly introduce yourself, write a short welcome for a car changing tire service. Do not write anything unnecessary, all we want is day, time and car type. You have a 20 word limit"""
    
    #start = datetime.date(datetime.date.today().year, 10, 1)
    
    prompts = input("You: ")
    response = co.chat(
        message = prompts,
        chat_history = [],
        preamble_override = preamble_override,
        temperature = 0,
        max_tokens=50
    )
    return response.text

#examples = pd.read_csv("trainingData.csv")
#print(examples.prompt[0])

extractor = Extractor(co, MODEL_KEY)
print("Chatbot:", chatbot())
questions = ["Are you reserving or coming for walk-in?", "What day would you like to come? The date must be between October 1st and November 30th.", "What time would you like to reserve at? We are open from 7AM to 7PM.",
         "What type/size of vehicle do you have? Is it a compact car, a medium car, a full-size car, a class 1 truck or a class 2 truck?"]
result = []
for question in questions:
    print(question)
    result.append(input("You: "))
    
information = extractor.extract("I am " + result[0] + " for " + result[1] + " at " + result[2] + " with a " + result[3])
print(information)