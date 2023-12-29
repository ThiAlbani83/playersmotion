import React from "react";

const Retargeting = () => {
  return (
    <section className="flex flex-col gap-4 mt-5 font-normal">
      <p className="">
        Retargeting, also known as remarketing, is a technique used in digital
        marketing, to re-engage users who have previously visited a website or
        interacted with a brand but did not complete a desired action, such as
        registering and depositing. The goal of retargeting is to bring these
        users back to the website and encourage them to take the desired action.
      </p>
      <p className="">
        In the context of affiliate marketing, retargeting works by placing a
        tracking pixel or code on the advertiser's website. When a user visits
        the website but doesn't convert, the tracking pixel collects data about
        their behavior. This data is then used to identify and target those
        specific users with relevant ads when they later visit other websites or
        online platforms within a retargeting network.
      </p>
      <p className="font-semibold">
        Here's a step-by-step explanation of how retargeting works in affiliate
        marketing:
      </p>
      <h4 className="font-semibold">Visitor Interaction:</h4>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li>
          A user visits an advertiser's website by clicking on an affiliate
          link.
        </li>
        <li>
          The user browses the website, views products or services but does not
          complete the desired action (e.g., registering and depositing).
        </li>
      </ul>
      <h4 className="font-semibold">Tracking Pixel Placement:</h4>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li>
          The advertiser has placed a tracking pixel or code on their website.
          This pixel collects data about the user's behavior, such as the pages
          they visited and the products they viewed.
        </li>
      </ul>
      <h4 className="font-semibold">Building Audience Lists:</h4>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li>
          - The collected data is used to create audience lists of users who did
          not convert. These lists are typically segmented based on specific
          behaviors or pages visited.
        </li>
      </ul>
      <h4 className="font-semibold">Retargeting Ads:</h4>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li>
          The affiliate marketer creates retargeting ads (image, text, or video
          ads) that are relevant to the user's previous interactions on the
          website.
        </li>
      </ul>
      <h4 className="font-semibold">Displaying Ads on Other Platforms:</h4>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li>
          The retargeting ads are displayed on other websites, social media
          platforms, or online ad networks that are part of the retargeting
          network.
        </li>
      </ul>
      <h4 className="font-semibold">Encouraging Conversions:</h4>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        <li>
          When the user sees these retargeting ads while browsing other sites,
          it serves as a reminder of the products or services they were
          interested in.
        </li>
        <li>
          The goal is to bring the user back to the advertiser's website and
          encourage them to complete the desired action.
        </li>
      </ul>
      <p>
        Retargeting can be a powerful strategy in affiliate marketing as it
        helps advertisers re-engage potential customers who have shown initial
        interest but did not convert. It enhances the chances of conversion by
        keeping the brand in front of the user and reminding them of their
        previous interest.
      </p>
    </section>
  );
};

export default Retargeting;
