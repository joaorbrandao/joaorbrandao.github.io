# Given, When, Then

In this post, let’s check Given, When, Then. A sequence of words that not only helped me to improve my way of thinking about coding but also has been helping me in my personal life.

![](https://images.unsplash.com/photo-1523903716430-8b05cc1ce968?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)

## Background

I started to think more about Given, When, Then when I got into software testing. In this post, I told you that used to spend a lot of time improving my coding skills by watching videos in Laracasts. There are a couple of testing video series in there and in almost all of them, they write the tests in the same way:

```markdown
**Given** I have this
**When**  some action is triggered
**Then**  I expect that to happen
```

If you think about this, you can cover so much ground with such a simple way of thinking. And if you structure your tests in the same way, you end up with code that is very simple and easy to understand, making them very straight to the point.

I started to think and use more and more this concept. Not only for testing but pretty much for all steps of a feature’s lifecycle.

Let's jump into a technical example.

## Technical Example

![](https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)

Let's imagine that you and I have a Pet Store website and, during this month, we have a 10% discount on our Premium subscription. So, every time a free account user login we want to show them a message saying: "Hey 👋 Subscribe to Premium now with a 10% discount!".

At this point and technically speaking, we want to create an endpoint from where we can get a subscription discount for a given user: `GET /v1/discounts`

### Planning

You're the one creating this endpoint! We start by getting together and creating a working ticket. In there, we want to ensure that we include something called Acceptance Criteria. When you finish your work, you'll pass the ticket to me. I'll be responsible to test it and ensuring that what you implemented covers every use case that we wrote on that Acceptance Criteria. Let's check the ticket!

```markdown
# Description
We want to create an endpoint in our API that allow us to get the available
discount for a given user.
Later, the UI will handle the received discount value and provide the message.

# Acceptance Criteria
**Given** I am a User
and   I have no subscription (free account)
**When**  a request to get my discount is made
**Then**  I should receive a 10% discount.

**Given** I am a User
and   I have a Premium subscription
**When**  a request to get my discount is made
**Then**  I should receive nothing.

```

### Development & Testing

You picked up the ticket from the queue and put your hands to work! You ended up developing a pretty simple logic.

```tsx
@Controller('/v1/discounts')
class DiscountsController {

	@Get()
	getSubscriptionDiscountForUser(
		@UserToken() user: User,
	): Discount | undefined {
		if(user.subscription === Subscription.PREMIUM) {
			return;
		}

		return new Discount(10);
	}
}
```

In the `DiscountsController`, you added a `getSubscriptionDiscountForUser` method. That method receives the `User` object resolved from a token passed in the request (`@UserToken()` decorator will do that for you). You return `undefined` when the `user.subscription` is already premium or a new instance of `Discount` with the value.

To ensure that this works as expected, you created two tests for the new code: 

- The first one verifies that you get the 10% discount when a user subscription is free.
- The second one verifies that you get no discount when a user subscription is a premium.

Let's see those tests!

```tsx
describe('getDiscountForUser', () => {
	let controller: DiscountsController;

	beforeEach(() => { controller = new DiscountsController() });

	it('should return a 10% discount when user has a free subscription', () => {
		// Given I am a User with a free subscription
		const user = new User(Subscription.FREE);

		// When I get my discount
		const discount = controller.getSubscriptionDiscountForUser(user);

		// Then I should receive a discount with a value of 10
		expect(discount).toBeInstanceOf(Discount);
		expect(discount.value).toEqual(10);
	});

	it('should return undefined when user has a premium subscription', () => {
		// Given I am a User with a premium subscription
		const user = new User(Subscription.PREMIUM);

		// When I get my discount
		const discount = controller.getSubscriptionDiscountForUser(user);

		// Then I should receive no discount
		expect(discount.value).toBeUndefined();
	});
});
```

Nice one! I noticed that you used a similar approach to the one in the Acceptance Criteria of the ticket to create your tests.

### QA

You finished your work and passed me the ticket for some QA. Let's bring that ticket back!

Ok! So we need 2 users: one in a free account and a second in a premium account. After getting those, I'll use an HTTP client tool and execute two requests:

```bash
curl "http://pookiequino.pet/v1/discounts" \
	-h "Authorization: Bearer $freeUserToken"
# Response: {"value":10}

curl "http://pookiequino.pet/v1/discounts" \
	-h "Authorization: Bearer $premiumUserToken"
# Response: undefined
```

Perfect! Now I got the 10% discount for the user in a free account and got nothing for the user in the premium account.

As you probably noticed, we used this *Given, When, Then* concept in different steps: planning, development, testing and QA. This is something that is not oriented to testing but a way of thinking that can help you through many steps.

Let’s take a look at this concept applied to non-technical matters.

## Applied to Personal Life

![cats](./assets/gwt-cats.jpg)

As I started to use this Given, When, Then daily at work, I noticed that I was also applying this in my personal life.

If you pay a little attention to your thoughts over your day, you’ll notice that, without even planning on it, probably your brain is already behaving in that way. 

I’ll give you one of my examples! A couple of months ago, my partner and I were thinking about adopting a second cat. At first, I was very reluctant about it as I was afraid of Pookie (first cat) not receiving the kitten well. As for any important decision, I started to think more about it: upsides and downsides. As I was listing all of these points in my head I started to structure them in a Given, When, Then way, like this:

```markdown
# Upsides
**Given** I have a cat
and   I work from mon to fri
**When**  I adopt a second cat
**Then**  they will make each other company

**Given** I have a cat
**When**  I adopt a second cat
**Then**  they will play together
and   they will be less sedentary
...

# Downsides
**Given** I have a cat
**When**  I adopt a second cat
**Then**  I'll have at least 2 litters to clean
...
```

## Conclusion

Given, When, Then are just three simple words that combined create this simple and logical way of thinking. It is something that your brain does every day without you even noticing. You just need to be more aware. As it naturally occurs, If you take advantage of that flow of thinking you can easily apply it to pretty much anything.

As a software engineer, this has been helping me through most of the development cycle steps of a feature. It is also useful to improve team members’ communication by creating this kind of standard way of defining what is expected to happen. This way, developers can take advantage of that information to guide them through the coding process. Testers take that statement as their source of truth for what's expected when testing a feature.

I hope you've enjoyed it, cheers! 👋

P.S. The Cats are now each other besties! 🐈🐈