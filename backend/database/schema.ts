export interface Schema {
  supply_total_unstaked: SupplyTotalUnstakedTable;
  supply_total_staked: SupplyTotalStakedTable;
  ibc_transfer: IbcTransferTable;
}

export interface SupplyTotalUnstakedTable {
  /** The height for this supply information. */
  height: bigint;
  /** The amount of UM not in any other location (at this height). */
  um: bigint;
  /** The amount of UM in the auction component (at this height). */
  auction: bigint;
  /** The amount of UM in the dex component (at this height). */
  dex: bigint;
  /** The amount of UM locked away through protocol arb execution (up to this height). */
  arb: bigint;
  /** The amount of UM locked away through fees (up to this height). */
  fees: bigint;
}

export interface SupplyTotalStakedTable {
  /** Internal identifier for the validator. */
  validator_id: number;
  /** The height for this supply information. */
  height: bigint;
  /** The UM equivalent value of this validator's staking token. */
  um: bigint;
  /** The total amount of the delegation token staked with this validator. */
  del_um: bigint;
  /** The current exchange rate from del_um -> um, multiplied by 10^8. */
  rate_bps2: bigint;
}

type IbcTransferKind =
  | "inbound"
  | "outbound"
  | "refund_timeout"
  | "refund_error"
  | "refund_other";

export interface IbcTransferTable {
  /** Internal identifier for the transfer. */
  id: number;
  /** The identifier for the asset being transferred. */
  asset: Uint8Array;
  /** The amount being transferred, as a string. */
  amount: string;
  /** The penumbra address involved in the transfer. */
  penumbra_addr: Uint8Array;
  /** The foreign address involved in the transfer. */
  foreign_addr: string;
  /** What kind of transfer is this? */
  kind: IbcTransferKind;
}
