import { getBMIEntries } from "@/lib/getBMIEntries";
import axios from "axios";
import { describe, test, expect, vi } from "vitest";

vi.mock('axios')

describe("getBMIEntries()", () => {
  test('return entries', async () => {
    const entries = [
      {
        id: '1234',
        weight: 70,
        height: 1.24,
        bmi: 22.1,
      },
    ];

    axios.get.mockResolvedValue({
      data: entries
    })

    const returnedEntries = await getBMIEntries();

    expect(returnedEntries).toEqual(entries)
  });
});
