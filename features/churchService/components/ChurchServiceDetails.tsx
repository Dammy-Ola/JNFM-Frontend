import Link from 'next/link'
import { FC } from 'react'
import { IChurchServiceRes } from '../index'
import { MdEdit } from 'react-icons/md'
import { formatDateToddmYYY } from '../../../utils'

const ChurchServiceDetails: FC<{ churchServiceRes: IChurchServiceRes }> = ({
  churchServiceRes: { churchService, totalOfferings },
}) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {churchService && (
          <Link
            className="bg-tertiary text-white hover:bg-secondary rounded-md flex flex-col items-center justify-center p-10 font-semibold"
            href={`/services/${churchService._id}/attendances`}
          >
            Attendance
            <span>
              (
              {churchService.attendances
                ? churchService.attendances.length
                : '0'}
              )
            </span>
          </Link>
        )}

        {churchService && (
          <Link
            className="bg-secondary text-white hover:bg-tertiary rounded-md flex flex-col items-center justify-center p-10 font-semibold"
            href={`/services/${churchService._id}/offerings`}
          >
            Offerings
            <span>
              (Ghc {totalOfferings ? (totalOfferings / 100).toFixed(2) : '0'})
            </span>
          </Link>
        )}

        <div className="bg-tertiary text-white hover:bg-secondary rounded-md flex flex-col items-center justify-center p-10 font-semibold">
          1
        </div>
        <div className="bg-secondary text-white hover:bg-tertiary rounded-md flex flex-col items-center justify-center p-10 font-semibold">
          1
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-extrabold text-2xl mb-5 text-secondary">
          Church Service Details
        </h1>
        {churchService && (
          <Link
            href={`/members/${churchService._id}/edit`}
            className="bg-primary hover:bg-tertiary text-white rounded-md py-2 px-4 flex items-center"
          >
            <MdEdit />
            <div>Edit</div>
          </Link>
        )}
      </div>
      <div className="shadow-md p-3 rounded-md mt-5">
        <div className="mb-5">
          <h3 className="font-semibold">Type</h3>
          <h4>
            {' '}
            {churchService &&
            churchService.churchServiceType &&
            typeof churchService.churchServiceType === 'object'
              ? churchService.churchServiceType.name
              : 'Not Given'}
          </h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Date</h3>
          <h4>
            {churchService && churchService.date
              ? formatDateToddmYYY(churchService.date)
              : 'Not Given'}
          </h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Start At</h3>
          <h4>
            {churchService && churchService.startsAt
              ? formatDateToddmYYY(churchService.startsAt)
              : 'Not Given'}
          </h4>
        </div>
        {/* <div className="mb-5">
          <h3 className="font-semibold">Ends At</h3>
          <h4>{endsAt ? formatDateToddmYYY(endsAt) : 'Not Given'}</h4>
        </div>
        <div className="mb-5">
          <h3 className="font-semibold">Attendance</h3>
          <h4>{attendances ? attendances.length : '0'}</h4>
        </div> */}
      </div>
    </section>
  )
}

export default ChurchServiceDetails
