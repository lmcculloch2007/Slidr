def analyzeSentiment(review: str):
    review = review.lower()

    positiveWords = ["good", "great", " amazing", "excellent"]
    negativeWords = ["bad", "terrible", "awful", "poor"]

    positive_score = 0
    negative_score = 0

    for word in positiveWords:
        if word in review.split():
            positive_score += 1

    for word in negativeWords:
        if word in review.split():
            negative_score += 1


    if positive_score > negative_score:
        return "positive"
    elif negative_score > positive_score:
        return "negative"
    else:
        return "neutral"
    return review


print(analyzeSentiment("This product is great"))
print(analyzeSentiment("This product is terrible"))
print(analyzeSentiment("This product is okay"))