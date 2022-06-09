import { AddZeros } from '.';

export class FormatDate {
  /**
   * Converter formato de data para localização pt-br
   * @param date ISODate
   * @returns 28/10/2021
   */
  public static ToStringBr(date: Date): string {
    if (!date) {
      return null;
    }

    const local = new Date(date);
    if (local instanceof Date) {
      return `${AddZeros(local.getDate())}/${AddZeros(
        local.getMonth() + 1
      )}/${local.getFullYear()}`;
    }

    return null;
  }

  /**
   * Converter formato de data para localização pt-br
   * @param date ISODate
   * @returns 28/10/2021
   */
  public static FormatStringBR(date: string): string {
    if (!date) {
      return null;
    }

    const newDate = new Date(date);
    const dates = newDate.toISOString().split('-');

    return `${dates[2].slice(0, 2)}/${dates[1]}/${dates[0]}`;
  }

  /**
   * Converter formato de data para localização en
   * @param date ISODate
   * @returns 2021-10-28
   */
  public static ToStringEn(date: Date): string {
    if (!date) {
      return null;
    }

    const local = new Date(date);
    if (local instanceof Date) {
      return `${local.getFullYear()}-${AddZeros(
        local.getMonth() + 1
      )}-${AddZeros(local.getDate())}`;
    }

    return null;
  }

  public static ToPdfName(date: Date): string {
    if (!date) {
      return null;
    }

    const local = new Date(date);
    if (local instanceof Date) {
      return `${AddZeros(local.getMonth() + 1)}_${local.getFullYear()}`;
    }

    return null;
  }

  public static DiffDate(startDate: Date, endDate: Date): number {
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    const diffTime = startDate.getTime() - endDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  public static isValidRangeDates(startDate: Date, endDate: Date): boolean {
    const filterDateFrom = startDate ? new Date(startDate) : new Date();
    const filterDateTo = endDate ? new Date(endDate) : new Date();

    if (filterDateFrom > filterDateTo) {
      return false;
    }
    return true;
  }

  public static formatDates(
    start: Date,
    end: Date
  ): {
    dateFrom: string;
    dateTo: string;
  } {
    const dateFrom = this.ToStringEn(start ?? new Date());
    const dateTo = this.ToStringEn(end ?? new Date());

    return {
      dateFrom,
      dateTo,
    };
  }

  public static formatMonth(month: number): string {
    const months = {
      '1': 'Jan',
      '2': 'Fev',
      '3': 'Mar',
      '4': 'Abr',
      '5': 'Mai',
      '6': 'Jun',
      '7': 'Jul',
      '8': 'Ago',
      '9': 'Set',
      '10': 'Out',
      '11': 'Nov',
      '12': 'Dez',
    };

    return months[month];
  }
}
