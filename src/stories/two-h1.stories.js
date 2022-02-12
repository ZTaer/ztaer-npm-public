import React from "react";
import { storiesOf } from "@storybook/react";

import TwoH1 from "../components/two-h1";

const stories = storiesOf("TwoH1", module);
stories.add("TwoH1 Default", () => <TwoH1 />);
