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
            additional_command="""Summary format: Month Day at Hour: Minute with Car type."""
        )
        return information.summary

def chatbot(co=co):
    history = []
    preamble_override = """You only know how to ask for month, day, hour, minute and car type (car size) information for change of tires reservation.
                            The date has to be between October 1st and November 30th, and the time has to be between 7AM to 7PM.
                            You have a word cap of 10 words."""
    print("Press Enter to exit")
    print("Please provide the date and time of your reservation, and car type.")
    
    #start = datetime.date(datetime.date.today().year, 10, 1)
    
    while True:
        
        prompts = input("You: ")
        if not prompts:
            print("\nEnding chat.")
            break
        response = co.chat(
            chat_history = history,
            message = prompts,
            preamble_override = preamble_override,
            stream = True,
            temperature = 0,
            #connectors=[{"id": "web-search"}] 
        )
        botResponse = ""
        print("Chatbot: ", end="")
        for event in response:
            if event.event_type == "text-generation":   
                print(event.text, end='')
                botResponse += event.text
        print('\n')
        
        history.extend([{"role": "USER", "message": prompts},
                        {"role": "CHATBOT", "message": botResponse}])
        #print("Chatbot:", response.text)

    chat_history = ""
    for loop in history:
        if loop["role"] == "USER":
            chat_history += loop["message"]
    
    return chat_history

#examples = pd.read_csv("trainingData.csv")
#print(examples.prompt[0])

extractor = Extractor(co, MODEL_KEY)
chat_history = chatbot()
result = extractor.evaluate(chat_history)
print(result)
#result2 = extractor.extract(chat_history)
#print(result2)