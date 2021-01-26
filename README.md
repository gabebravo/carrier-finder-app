# Technical Challenge (FE)

A commercial real estate brokerage. Fundamentally, when a client needs an insurance policy, we find a carrier that is able to provide it.

For example, a client might say, "I need auto coverage in Florida." To which a broker might answer, "Great! I'll reach out to my favorite carrier in that state: General Safety."

What makes this complicated is that not all carriers are the same.

1. Not all carriers operate in all states.
2. Not all carriers offer all policies.
3. The policies that a carrier offers might even vary from state to state.

## The Challenge

Currently, our brokers navigate the process of finding a carrier using a google sheet.
● Please create a single page app, that allows a user to change appropriate fields, and see which carriers meet the criteria.
○ For example: when a user selects Auto Insurance in Michigan, the page ​should show Allstate as an option. When they change the state to Indiana, Allstate should ​not​ be shown as an option.
● (optional) Please transform the spreadsheet into an API. This API can take whatever form you choose, but you must be able to explain your choices.

## The Requirements

1. Here is a google sheet​ that our brokers currently use. The results returned by the app should match those found in this sheet. ​Note that there are multiple tabs.
2. The API should take a state abbreviation (IL, MI, etc.) and a policy type (Auto, Fire, and others found in the google sheet).
3. You need not deploy your code, as long as it can be run locally.
4. We're a javascript (and typescript) shop, but you're free to code this in whatever
   language you prefer.
5. Let's say no more than 3 hrs on this - don't want to take up your full day! Start with the
   frontend, and only move to the backend if the frontend work goes quickly.

## Hints & Tips

The abbreviation "PL" stands for "Personal Liability." This is a superset of coverage, including things like, "Fire" or "Auto." Conversely, "CL" stands for "Commercial Lines." ​You do not need to support searching by superset (i.e. personal or commercial).​ This information is included just so you can better understand the dataset.
