import React from "react";
import { storiesOf } from "@storybook/react";

import TsH1 from "../components/ts-h1";

const stories = storiesOf("TsH1", module);
stories.add("TsH1 Default", () => <TsH1 />);
